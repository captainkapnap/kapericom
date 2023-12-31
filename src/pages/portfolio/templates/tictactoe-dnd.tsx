import { DndContext, useDroppable, useDraggable, TouchSensor, MouseSensor, KeyboardSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState, useEffect, useId } from "react";
import type { ReactNode, CSSProperties } from "react";
import type { DragEndEvent, DragMoveEvent } from "@dnd-kit/core/dist/types";
import type { UseDraggableArguments, UseDroppableArguments } from "@dnd-kit/core/dist/hooks";


type DroppableProps = UseDroppableArguments & { children?: ReactNode }
type DraggableProps = UseDraggableArguments & { children?: ReactNode }
type EachSquareState = { [key: number]: string}


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
    const [didXWin, setDidXWin] = useState<boolean | null>(null);
    // this is for some random hydration error in Dndkit... worked so far
    const DndID = useId();
    const [isXTurn, setIsXTurn] = useState<boolean>(false);
    const [isMoveValid, setIsMoveValid] = useState<boolean | null>(null);
    const [eachSquareState, setEachSquareState] = useState<EachSquareState>(defaultEachSquareState);
    const oActive = (
        <Draggable id="o">O</Draggable>
    )
    const xActive = ( 
        <Draggable id="x">X</Draggable>
    )

    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
    
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
    );


    // ================ DND Kit events ================
    function Droppable(props: DroppableProps) {
        const {isOver, setNodeRef} = useDroppable({ id: props.id, data: { accepts: [ 'open' ] } });
        let backgroundColor;

        if (isOver && typeof props.id === 'number' && !eachSquareState[props.id]) {
            backgroundColor = 'green'
        }  else if (!isMoveValid && isOver) {
            backgroundColor = 'red'
        } else {
            backgroundColor = '#EAEDED'
        }

        const style: CSSProperties = {
            // backgroundColor: isOver && typeof props.id === 'number' && !eachSquareState[props.id] ? 'green' : gameBoardStyle.bgColor,
            backgroundColor: backgroundColor,
            // backgroundColor: isMoveValid ? 'green' : 'red',
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
            <button className=" text-black text-[3rem] font-bold" ref={setNodeRef} style={style} {...listeners} {...attributes}>
                {props.children}
            </button>
        )
    }

    function handleDragMove(e: DragMoveEvent) {
        const hoverOverSquare: number | undefined = typeof e.over?.id === 'number' ? e.over.id : undefined;
        if (hoverOverSquare !== undefined && eachSquareState[hoverOverSquare] === '') {
            setIsMoveValid(true);
        } else {
            setIsMoveValid(false);
        }
    }

    function handleDragEnd(event: DragEndEvent) {
        
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
            setIsXTurn(!isXTurn);
        }
        
    }

    function SetupGameBoard() {

        return (
            <div className='bg-zinc-600 h-3/5 flex justify-center items-center rounded-3xl mx-4'>
                <div className='grid gap-1 grid-cols-3 grid-rows-3 h-[90%] w-[90%]'>
                    {containers.map((id) => (
                        <Droppable id={id} key={id}>
                            {eachSquareState[id]}
                        </Droppable>
                    ))}
                </div>
            </div>
        )

    }

    function GameIsFinished() {

        return (
            <div className='bg-zinc-600 h-3/5 flex justify-center items-center rounded-3xl mx-4'>
                <div className='flex flex-col justify-center items-center w-[90%] h-[90%] bg-slate-400 rounded-3xl border-2 border-yellow-50'>
                    <div className='h-1/5 w-full flex justify-center items-center'>
                        {didXWin ? <h1 className='font-bold'>X won!</h1> : <h1 className='font-bold text-2xl text-red-900'>O is the winner!</h1>}
                    </div>
                    <div className='h-4/5 w-full p-4'>
                        <h2 className='text-center font-bold'>Do you want to play again?</h2>
                        <div className='flex justify-center items-center h-[90%]'>
                            <button onClick={handleYes} className='w-[40%] h-[90%] bg-yellow-50 rounded-2xl border-2 border-red-900 text-4xl hover:bg-yellow-200 active:bg-yellow-200 mr-4'>
                                Yes!
                            </button>
                            <button onClick={handleNo} className='w-[40%] h-[90%] bg-yellow-50 rounded-2xl border-2 border-red-900 text-4xl hover:bg-yellow-200 active:bg-yellow-200'>
                                Nope!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function handleNo() {
        alert("Too bad!  Starting over again")
        setDidXWin(null)
        setEachSquareState(defaultEachSquareState)
    }
    function handleYes() {
        setDidXWin(null)
        setEachSquareState(defaultEachSquareState)
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
            setDidXWin(true);
        } else if (isOWinner) {
            setDidXWin(true);
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
            <DndContext onDragEnd={handleDragEnd} onDragMove={handleDragMove} sensors={sensors} id={DndID} >

            <div className='h-1/5 flex justify-center items-center'>
                <div className='w-[90%] h-[70%] bg-yellow-50 border-b-8 border-r-8 border-red-900 rounded-2xl flex justify-center'>
                    {!isXTurn ? oActive : null}
                </div>
            </div>

            {didXWin === null ? <SetupGameBoard /> : <GameIsFinished />}

            <div className='h-1/5 flex justify-center items-center'>
                <div className='w-[90%] h-[70%] bg-yellow-50 border-b-8 border-r-8 border-red-900 rounded-2xl flex justify-center'>
                    {isXTurn ? xActive : null}
                </div>
            </div>

            </DndContext>
        </div>
      </div>

    )
}

export default ICodeThis;



 