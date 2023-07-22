import { reverse } from "dns"

type ListofPages = { type: "Component" | "Template", fileName: string, title: string, desc: string}[]

export const listOfPages: ListofPages = [
    {type: "Template", fileName: 'tictactoe-dnd.tsx', title: 'Tic Tac Toe', desc: ''},
    {type: "Component", fileName: 'fluid-navbar.tsx', title: 'Fluid Navbar', desc: ''},
    {type: "Template", fileName: 'active-wandering.tsx', title: 'Active Wandering', desc: ''},
    {type: "Component", fileName: 'keyboard.tsx', title: 'Keyboard', desc: ''},
    {type: "Template", fileName: 'website-sponsorship.tsx', title: 'Website Sponsorship', desc: ''},
    {type: "Template", fileName: 'testimonials-black-shadowbg.tsx', title: 'Testimonails w/ Shadow Outline', desc: ''},
    {type: "Template", fileName: 'responsive-design.tsx', title: 'Responsive Design', desc: 'Followed Kevin Powells CSS YouTube video on Responsive design: https://www.youtube.com/watch?v=bn-DQCifeQQ '},
    {type: "Component", fileName: 'popup-msg-canClose.tsx', title: 'Closable Msg', desc: ''},
    {type: "Template", fileName: 'popup-w-buttons.tsx', title: 'Selectable Buttons', desc: ''},
    {type: "Template", fileName: 'music.tsx', title: 'Music Player Template', desc: ''},
    {type: "Template", fileName: 'edit-name-email-date.tsx', title: 'Edit Name Email Date - Validation not Working', desc: ''},
    {type: "Template", fileName: 'announcements.tsx', title: 'Announcement List', desc: ''},
    {type: "Template", fileName: '3boxes.tsx', title: '3 Boxes', desc: ''},
    {type: "Component", fileName: 'scroll-bar-anim-menu.tsx', title: 'Search Bar Animated Menu', desc: 'This component utilizes an animated menu by utilizing a short-circuit evaluation.  When the box is checked, show the div with 3 checkbox.  There is a class called animation-slide-down on this div and in the CSS, it has keyframes from 0 to 100% opacity and referenced in the animation-name css attribute.'},
]