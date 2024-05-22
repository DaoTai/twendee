import { memo } from "react";

const TableUsers = ({ data }: { data: IUser[] }) => {
  return (
    <table className="xs:table block w-full table-auto overflow-x-auto text-center">
      <thead className="bg-slate-300">
        <tr>
          <th className="border border-slate-300 px-1 py-3">Order</th>
          <th className="border border-slate-300 px-1 py-3">Fullname</th>
          <th className="border border-slate-300 px-1 py-3">Username</th>
          <th className="border border-slate-300 px-1 py-3">Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          const { first, last, title } = user.name;
          const { uuid, username } = user.login;
          const { thumbnail } = user.picture;
          return (
            <tr key={uuid} className="transition-all duration-300 ease-in-out hover:bg-slate-200">
              <td className="border border-slate-300 p-0.5">{i + 1}</td>
              <td className="border border-slate-300 p-0.5">{`${title}. ${first} ${last}`}</td>
              <td className="border border-slate-300 p-0.5">{username}</td>
              <td className="border border-slate-300 p-0.5">
                <img alt="thumbnail" src={thumbnail} className="mx-auto size-10 rounded-full" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(TableUsers);
