import React from "react";

export const InputNotes = ({
  newData,
  maxLengthTitle,
  maxLengthBody,
  onTitleChange,
  onBodyChange,
  onSubmitNote,
}) => {
  return (
    <>
      <form onSubmit={onSubmitNote}>
        <h2 className="mt-6 text-3xl font-bold text-center text-gray-700">
          Add Note
        </h2>
        <div className="my-5">
          <p className="flex mr-3 justify-end">
            remaining characters: {maxLengthTitle}
          </p>
          <input
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
            type="text"
            name="title"
            placeholder="input your note title..."
            value={newData.title}
            onChange={(event) => onTitleChange(event.target.value)}
            required
          />
        </div>

        <div>
          <p className="flex justify-end">remaining characters: {maxLengthBody}</p>
          <textarea
            className="w-full h-64 p-3 rounded-md border-2 border-violet-200"
            typeof="text"
            name="body"
            placeholder="input your note body..."
            value={newData.body}
            onChange={(event) => onBodyChange(event.target.value)}
            required
          />
        </div>

        <button className="my-5 p-4 rounded-md group text-white bg-teal-500 hover:bg-teal-300">
          <span className="text-white group-hover:text-black">Add</span>
        </button>
      </form>
    </>
  );
};
