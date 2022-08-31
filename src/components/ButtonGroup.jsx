import React from "react";

const ButtonGroup = () => {
    const bg__style = "inline-block px-6 py-2.5 font-medium text-xs leading-tight hover:bg-blue-400 focus:ring-0 active:bg-blue-500 border-2 border-blue-400 text-blue-400 hover:text-white transition duration-150 ease-in-out";

  return (
    <div>
      <div class="flex items-center justify-center">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            class={`rounded-l border-r-0 ${bg__style}`}
          >
            Today
          </button>
          <button
            type="button"
            class={`border-r-0 ${bg__style}`}
          >
            Week
          </button>
          <button
            type="button"
            class={`rounded-r ${bg__style}`}
          >
            Month
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
