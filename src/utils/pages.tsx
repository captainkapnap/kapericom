
type ListofPages = { type: "Component" | "Template", fileName: string, title: string, desc: string}[]

export const listOfPages: ListofPages = [
    {type: "Component", fileName: 'scroll-bar-anim-menu.tsx', title: 'Search Bar Animated Menu', desc: 'This component utilizes an animated menu by utilizing a short-circuit evaluation.  When the box is checked, show the div with 3 checkbox.  There is a class called animation-slide-down on this div and in the CSS, it has keyframes from 0 to 100% opacity and referenced in the animation-name css attribute.'},
    {type: "Template", fileName: '3boxes.tsx', title: '3 Boxes', desc: ''},
    {type: "Template", fileName: 'announcements.tsx', title: 'Announcement List', desc: ''},
    {type: "Template", fileName: 'edit-name-email-date.tsx', title: 'Edit Name Email Date - Validation not Working', desc: ''},
    {type: "Template", fileName: 'music.tsx', title: 'Music Player Template', desc: ''},
    {type: "Template", fileName: 'popup-w-buttons.tsx', title: 'Selectable Buttons', desc: ''},
    {type: "Component", fileName: 'popup-msg-canClose.tsx', title: 'Closable Msg', desc: ''},
]