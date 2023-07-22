import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";
import { ReactNode, useState } from "react";



function ICodeThis() {
    // ================ STATE ================
    const containers = ['A', 'B', 'C'];
    const [isDropped, setIsDropped] = useState<boolean>(false);
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
        <Draggable>Drag Me</Draggable>
    )

    // ================ HELPERS ================
    function Droppable({ children }: {children: ReactNode}) {
        const {isOver, setNodeRef} = useDroppable({ id: 'droppable' });
        const style = {
            color: isOver ? 'green' : undefined,
            backgroundColor: isOver ? 'red' : undefined,
        }

        return (
            <div ref={setNodeRef} style={style}>
                {children}
            </div>
        )
    }

    function Draggable({ children }: { children: ReactNode}) {
        const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: 'draggable '});
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` 
        } : undefined;
                   
        return (
            <button className="bg-red-500 w-40 h-20 text-white" ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {children}
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
              <Droppable>
                {isDropped ? draggableMarkup : 'Drop Here'}
              </Droppable>
           </DndContext>
        </div>
      </div>

    )
}

export default ICodeThis;



 