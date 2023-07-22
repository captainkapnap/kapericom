import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { useState } from "react";



function ICodeThis() {
    // ================ STATE ================
    const [isDropped, setIsDropped] = useState<boolean>(false);
    const draggableMarkup = (
        <Draggable>Drag Me</Draggable>
    )

    // ================ HELPERS ================
    function Droppable(props: any) {
        const {isOver, setNodeRef} = useDroppable({ id: 'droppable' });
        const style = {
            color: isOver ? 'green' : undefined,
        }

        return (
            <div ref={setNodeRef} style={style}>
                {props.children}
            </div>
        )
    }

    function Draggable(props: any) {
        const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: 'draggable '});
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` 
        } : undefined;
                   
        return (
            <button className="bg-red-500 w-40 h-20 text-white" ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {props.children}
            </button>
        )
    }

    function handleDragEnd(event: any) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true);
        }
    }

    // ================ LIFECYCLE ================


    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-zinc-100 min-h-[100svh]">
           <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? draggableMarkup : null}
              <Droppable props="ddd">
                {isDropped ? draggableMarkup : 'Drop Here'}
              </Droppable>
           </DndContext>
        </div>
      </div>

    )
}

export default ICodeThis;



 