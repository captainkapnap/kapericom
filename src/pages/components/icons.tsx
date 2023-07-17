import React from 'react';
type IcTProps = {
    icons: "twitter" | "facebook" | "pinterest" | "arrow-back" | "mic" | "world" | "backspace" | "up" | "quote" | "components" | "template" | "check" | "checks" | "x" | "chevronUp" | "chevronDown" | "search" | "dots" | "home" | "flame" | "library";
    classNameCustom?: string;
  };
  


function IcT({icons, classNameCustom}: IcTProps): JSX.Element | null {
    if (icons === "checks") {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 12l5 5l10 -10"></path>
               <path d="M2 12l5 5m5 -5l5 -5"></path>
            </svg>
        )
    } else if (icons === "x") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
            </svg >
        )
    } else if (icons === "chevronUp") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 15l6 -6l6 6"></path>
            </svg>
        )
    } else if (icons === "chevronDown") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
            </svg>
        )
    } else if (icons === "search") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
            </svg>
        )
    } else if (icons === "dots") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
        )
    } else if (icons === "home") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M10 12h4v4h-4z"></path>
            </svg>
        )
    } else if (icons === "flame") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"></path>
            </svg>
        )
    } else if (icons === "library") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"></path>
            </svg>
        )
    } else if (icons === "check") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
        )
    } else if (icons === "components") {
        return (
<svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 12l3 3l3 -3l-3 -3z"></path>
   <path d="M15 12l3 3l3 -3l-3 -3z"></path>
   <path d="M9 6l3 3l3 -3l-3 -3z"></path>
   <path d="M9 18l3 3l3 -3l-3 -3z"></path>
</svg>
        )
    } else if (icons === "template") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                <path d="M14 12l6 0"></path>
                <path d="M14 16l6 0"></path>
                <path d="M14 20l6 0"></path>
            </svg>

        )
    } else if (icons === "quote") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
   <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
</svg>
        )
    } else if (icons === "up") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z" strokeWidth="0" fill="currentColor"></path>
    </svg>
        )
    } else if (icons === "backspace") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
       <path d="M12 10l4 4m0 -4l-4 4"></path>
    </svg>
        )
    } else if (icons === "mic") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
       <path d="M5 10a7 7 0 0 0 14 0"></path>
       <path d="M8 21l8 0"></path>
       <path d="M12 17l0 4"></path>
    </svg>
        )
    } else if (icons === "world") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
       <path d="M3.6 9h16.8"></path>
       <path d="M3.6 15h16.8"></path>
       <path d="M11.5 3a17 17 0 0 0 0 18"></path>
       <path d="M12.5 3a17 17 0 0 1 0 18"></path>
    </svg>
        )
    } else if (icons === "arrow-back") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
    </svg>
        )
    } else if (icons === "twitter") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>
        )
    } else if (icons === "facebook") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </svg>
        )
    } else if (icons === "pinterest") {
        return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M8 20l4 -9"></path>
       <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
       <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    </svg>
        )
    }

    return(null);
}

export default IcT;

/*
} else if (icons === "") {
    return (
<svg xmlns="http://www.w3.org/2000/svg" className={classNameCustom ?? undefined} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 20l4 -9"></path>
   <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
</svg>
    )
}
*/