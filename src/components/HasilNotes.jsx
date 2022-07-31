import React from "react";
import { CardNotes } from "./CardNotes";
import { SearchNote } from "./SearchNote";

export const HasilNotes = ({
  data,
  statusNotes,
  onDelete,
  onChangeArchiveStatus,
  onChangeStatusNotes,
  search,
  onSearch,
}) => {
  const dataNote = data.filter((item) => item.archived === false);
  const dataArchived = data.filter((item) => item.archived === true);

  return (
    <div className="className">
      <h2 className="mt-5 text-3xl font-bold text-center text-gray-700">
        Notes
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex justify-start">
            <button
            className={`min-w-[44px] min-h-[44px] px-4 rounded-md cursor-pointer ${
                statusNotes === "note"
                ? "bg-green-400"
                : "hover:bg-green-100"
            }`}
            onClick={() => onChangeStatusNotes("note")}
            >
            <span className="text-xl">Note</span>
            </button>

            <button
            className={`ml-3 min-w-[44px] min-h-[44px] px-4 rounded-md cursor-pointer ${
                statusNotes === "archive"
                ? "bg-yellow-400"
                : "hover:bg-yellow-200"
            }`}
            onClick={() => onChangeStatusNotes("archive")}
            >
            <span className="text-xl">Archive</span>
            </button>
        </div>
        <SearchNote search={search} onSearch={onSearch} />
      </div>
      <div className={`grid grid-cols-2 gap-5 relative`}>
        {statusNotes === "note" && (
          <>
            {!!dataNote && dataNote.length !== 0 ? (
              dataNote
                .filter((data) => {
                  if (search !== "") {
                    return data.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  } else {
                    return data;
                  }
                })
                .map((item, index) => (
                  <CardNotes
                    data={item}
                    key={index}
                    onDelete={onDelete}
                    onChangeArchiveStatus={onChangeArchiveStatus}
                    statusNotes={statusNotes}
                  />
                ))
            ) : (
                <h1 className="">Data Not Found</h1>
            )}
          </>
        )}

        {statusNotes === "archive" && (
          <>
            {!!dataArchived && dataArchived.length !== 0 ? (
              dataArchived
                .filter((data) => {
                  if (search !== "") {
                    return data.title
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  } else {
                    return data;
                  }
                })
                .map((item, index) => (
                  <CardNotes
                    data={item}
                    key={index}
                    onDelete={onDelete}
                    onChangeArchiveStatus={onChangeArchiveStatus}
                    statusNotes={statusNotes}
                  />
                ))
            ) : (
              <h1>Data Not Found</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};
