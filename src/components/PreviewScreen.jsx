import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function PreviewScreen({ currentDisplay, setCurrentDisplay, previewCardIndex, content, editCard }) {
  if (currentDisplay == "PREVIEW_SCREEN") {
    const [currentText, setCurrentText] = useState(null);
    return (
      <div className="fixed w-full h-screen z-[5]">
        <div className="bg-zinc-900/90 fixed z-[5] h-[80%] w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col justify-between p-2">
          <button
            className="absolute right-0 top-0 p-1 text-lg bg-zinc-200 rounded-full"
            onClick={() => {
              setCurrentDisplay("HOME");
            }}
          >
            <ImCross />
          </button>
          <textarea
            className="bg-transparent text-zinc-300 text-3xl p-4 h-[85%] border-none rounded-2xl"
            onChange={(e) => {
              setCurrentText(prev=>e.target.value)
            }}
          >
            {content[previewCardIndex]}
          </textarea>
          <button
            className="h-[10%] w-full bg-zinc-700 rounded-2xl text-xl text-zinc-200"
            onClick={() => {
              if (currentText !== null) {
                editCard(previewCardIndex, currentText)
              }
              setCurrentDisplay("HOME");
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}
