import { DndContext, useDroppable, useDraggable, TouchSensor, MouseSensor, KeyboardSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";
import type { UseDraggableArguments, UseDroppableArguments } from "@dnd-kit/core/dist/hooks";


type DroppableProps = UseDroppableArguments & { children?: ReactNode }
type DraggableProps = UseDraggableArguments & { children?: ReactNode }
type EachSquareState = { [key: number]: string}


// const defaultAnnouncements = {
//     onDragStart(event: DragStartEvent) {
//       return `Picked up draggable item ${event.active.id}.`;
//     },
//     onDragOver(event: DragOverEvent) {
//       if (event.over?.id) {
//         return `Draggable item ${id} was moved over droppable area ${event.over.id}.`;
//       }
  
//       return `Draggable item ${id} is no longer over a droppable area.`;
//     },
//     onDragEnd(id, overId) {
//       if (overId) {
//         return `Draggable item was dropped over droppable area ${overId}`;
//       }
  
//       return `Draggable item ${id} was dropped.`;
//     },
//     onDragCancel(id) {
//       return `Dragging was cancelled. Draggable item ${id} was dropped.`;
//     },
//   }


const WINNING_COMBINATIONS: string[][] = [
    ['1', '2', '3'], // Top row
    ['4', '5', '6'], // Middle row
    ['7', '8', '9'], // Bottom row
    ['1', '4', '7'], // Left column
    ['2', '5', '8'], // Middle column
    ['3', '6', '9'], // Right column
    ['1', '5', '9'], // Diagonal from top-left to bottom-right
    ['3', '5', '7'], // Diagonal from top-right to bottom-left
  ];

function ICodeThis() {
    // ================ STATE ================
    const defaultEachSquareState: EachSquareState = {
        1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''
    }
    const containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [isXTurn, setIsXTurn] = useState<boolean>(false);
    const [eachSquareState, setEachSquareState] = useState<EachSquareState>(defaultEachSquareState);
    const oActive = (
        <Draggable id="o">O</Draggable>
    )
    const xActive = ( 
        <Draggable id="x">X</Draggable>
    )
    // const touchSensor = useSensor(TouchSensor, {
    //     activationConstraint: {
    //         delay: 250,
    //         tolerance: 5,
    //     }
    // }
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
    
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
    );


    // ================ DND Kit events ================
    // const onDragStart = (event: DragStartEvent) => { defaultAnnouncements.onDragStart("draggable")
    // }

    function Droppable(props: DroppableProps) {
        const {isOver, setNodeRef} = useDroppable({ id: props.id, data: { accepts: [ 'open' ] } });
        const gameBoardStyle = {
            bgColor: '#EAEDED'
        }
        
        const style: CSSProperties = {
            backgroundColor: isOver && typeof props.id === 'number' && !eachSquareState[props.id] ? 'green' : gameBoardStyle.bgColor,
            fontSize: '4rem',
            textAlign: 'center',
            fontWeight: 'bold',
        }

        return (
            <div ref={setNodeRef} style={style}>
                {props.children}
            </div>
        )
    }

    function Draggable(props: DraggableProps) {
        const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: props.id, data: { type: 'takenO'} });
        const style = transform ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` 
        } : undefined;
                   
        return (
            <button className="w-40 h-20 text-black text-4xl font-bold" ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {props.children}
            </button>
        )
    }

    function handleDragEnd(event: DragEndEvent) {
        console.log(event)
        setIsXTurn(!isXTurn);
        const targetSquare: number | undefined = typeof event.over?.id === 'number' ? event.over.id : undefined;

        // Dont think squareAccepts really matters for this use case.. would be nice if 
        // specifically allowing images or text or other template types though
        // const squareAccepts = Array.isArray(event.over?.data.current?.accepts) 
        //     ? event.over?.data.current?.accepts as string[]
        //     : undefined;

        // const isSquareAvailable = squareAccepts?.some(str => str.includes('open')) ?? false;

        const isSquareAvailable = targetSquare !== undefined && eachSquareState[targetSquare] === '' ? true : false;

        if (isSquareAvailable && targetSquare !== undefined) {
            setEachSquareState((prevSquareStates) => ({
                ...prevSquareStates,
                [targetSquare]: (event.active.id as string).toUpperCase(),
            }))
        }
        
    }

    function SetupGameBoard() {

        return (
            <div className='gameBoard bg-zinc-600 h-3/5 grid gap-1 grid-cols-3 grid-rows-3'>
                {containers.map((id) => (
                    <Droppable id={id} key={id}>
                        {eachSquareState[id]}
                    </Droppable>
                ))}
            </div>
        )

    }
    // ================ HELPERS ================
    function isWinner(board: EachSquareState, player: string, combination: string[]): boolean {
        return combination.every((square) => board[parseInt(square)] === player);
    }

    function checkWinner(player: string): boolean {
        return WINNING_COMBINATIONS.some((combination) => isWinner(eachSquareState, player, combination))
    }

    function alertWinner() {
        const isXWinner = checkWinner('X');
        const isOWinner = checkWinner('O');

        if (isXWinner) {
            alert("X Wins!");
        } else if (isOWinner) {
            alert("O Wins!");
        } else {
            
        }
    }

    // ================ LIFECYCLE ================
    useEffect(() => {
        return alertWinner()
    }, [eachSquareState])

    // ================ RETURN ================
    return (
      <div id="toggleDarkDiv" className="dark">
        <div id="bodyDiv" className="bg-zinc-900 h-[100svh] overflow-hidden">
            <DndContext onDragEnd={handleDragEnd} sensors={sensors} >

            <div className='topPlayer h-1/5 bg-yellow-50'>
                {!isXTurn ? oActive : null}
            </div>

            <SetupGameBoard />

            <div className='bottomPlayer h-1/5 bg-yellow-50'>
                {isXTurn ? xActive : null}
            </div>

            </DndContext>
        </div>
      </div>

    )
}

export default ICodeThis;



 