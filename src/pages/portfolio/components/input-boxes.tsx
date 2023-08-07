import IcT from "~/pages/components/icons";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

function ICodeThis() {
    // ================ STATE ================
    const inputSingleRef = useRef<HTMLInputElement | null>(null);
    const inputMultiRef = useRef<RefObject<HTMLButtonElement>[]>([]);
    const [inputEmpty, setInputEmpty] = useState<boolean>(true);
    
    // ================ HELPERS ================
    function handleInputChange() {
        if (inputSingleRef.current && inputSingleRef.current.value.length > 0 && inputEmpty === true) {
            setInputEmpty(false);
        } else if (inputSingleRef.current && inputSingleRef.current.value.length === 0 && inputEmpty === false) {
            setInputEmpty(true);
        }
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="min-h-screen bg-slate-300 flex justify-center items-center">
            <div className='input-label-move__wrapper | shadow-lg'>

                <input 
                    type="text"
                    id="input-label-move"
                    name="input-label-move"
                    placeholder="Enter some text"
                    required
                    className={` ${inputEmpty === false ? 'input-label-move__notEmpty' : '' } input-label-move__field input_remove_formatting`}
                    ref={inputSingleRef} // could set the translates up by setting height of inputbox to css property..
                    onChange={handleInputChange}

                    // title="this is a title"  // tooltip here
                />
                <label
                    htmlFor="input-label-move"
                    className="input-label-move__label input_label_remove_formatting"
                >Enter Something</label>
                <IcT icons="flame" classNameCustom="input-label-move__icon" />
            </div>
        </div>
      </div>

    )
}

export default ICodeThis;

 