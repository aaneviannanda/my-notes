import React from "react";
import { DeleteNote } from "./DeleteNote";
import { showFormattedDate } from "../utils";

export const CardNotes = ( { data, onDelete, onChangeArchiveStatus, statusNotes } ) => {
    const { id, title, body, createdAt } = data;
    return (
        <>
        <div className="relative my-5 p-7 flex flex-col bg-violet-100 rounded-xl overflow-hidden">
            <div className="flex justify-between mx-3">
            <button
                className={`border-none text-white text-base rounded-md px-5 py-2 ${
                    statusNotes === "note" ? "bg-yellow-400 hover:bg-yellow-300" : "bg-green-400 hover:bg-green-300"
                  }`} 
                onClick={() => onChangeArchiveStatus(id)}
            >
                
                <span>{statusNotes === "note" ? "Set to Archive" : "Set Note"}</span>
            </button>
            <DeleteNote 
                id={id}
                onDelete={onDelete}
            />
            </div>
            <h1 className="m-1 px-6 text-center font-bold text-2xl">{title}</h1>
            <div className="flex justify-between my-5">
            <p className="flex text-yellow-700 items-center">{showFormattedDate(createdAt)}</p>
            </div>
            <p className="text-justify">{body}</p>
        </div>
        </>
    );
};
