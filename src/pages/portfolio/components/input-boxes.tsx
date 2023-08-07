import IcT from "~/pages/components/icons";

function ICodeThis() {
    // ================ STATE ================
    
    
    // ================ HELPERS ================


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
                    className='input-label-move__field input_remove_formatting'
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

 