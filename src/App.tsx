import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useGetListUserQuery } from "./store/services/user.service";
import TableUsers from "./components/TableUsers";
import Paginate from "./components/Paginate";
import SortSelect from "./components/SortSelect";

function App() {
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<ISortOption>("none");
  const { data, isError, isFetching, isLoading } = useGetListUserQuery({ page, results: 10 });

  const listUser = useMemo(() => {
    if (data?.results) {
      const copiedListUser = [...data.results];
      switch (sortBy) {
        case "username":
          return copiedListUser.sort((a, b) => {
            const usernameA = a.login.username.toLowerCase();
            const usernameB = b.login.username.toLowerCase();
            if (usernameA < usernameB) return -1;
            if (usernameA > usernameB) return 1;
            return 0;
          });
        case "fullname":
          return copiedListUser.sort((a, b) => {
            const fullnameA = `${a.name.title} ${a.name.first} ${a.name.last}`.toLowerCase();
            const fullnameB = `${b.name.title} ${b.name.first} ${b.name.last}`.toLowerCase();
            if (fullnameA < fullnameB) return -1;
            if (fullnameA > fullnameB) return 1;
            return 0;
          });
        default:
          return copiedListUser;
      }
    }
    return [];
  }, [data?.results, sortBy]);

  // Handle next page
  const handlePaginateNext = useCallback(() => {
    // Because implement pagination for up to 100 users so stop at 10 page
    setPage((prev) => (prev < 10 ? prev + 1 : prev));
  }, []);

  // Handle prev page
  const handlePaginatePrev = useCallback(() => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  // Handle select sort by username or fullname
  const handleSelectSort = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ISortOption;
    setSortBy(value);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-100 ">
      <section className="container space-y-4 p-2 pb-6">
        <h1 className="text-center text-4xl font-bold  tracking-wider">List user</h1>
        {/* Sort select */}
        <SortSelect value={sortBy} onChange={handleSelectSort} />

        {/* Table data */}
        <div className="mt-6">
          {!isLoading && <TableUsers data={listUser} />}
          {isLoading && <h6 className="text-center">Loading ...</h6>}
        </div>

        {/* Paginate */}
        {!isError && (
          <Paginate
            maxPage={10}
            page={page}
            disabled={isLoading || isFetching}
            onPrev={handlePaginatePrev}
            onNext={handlePaginateNext}
          />
        )}

        {isError && (
          <h6 className="text-center text-3xl font-semibold text-rose-600">
            Fetching data is error !!
          </h6>
        )}
      </section>
    </main>
  );
}

export default App;
