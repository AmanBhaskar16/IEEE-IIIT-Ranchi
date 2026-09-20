import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const pages = [['Home','/'],['Members','/members'],['About','/about'],['Events & Activities','/events'],['Contact','/contact']];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <nav className="navbar" aria-label="Main navigation"><div className="nav-inner container"><Link className="brand" to="/" onClick={()=>setOpen(false)}><img src="/reference/ieee.svg" alt="IEEE"/></Link><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div id="navigation" className={'nav-links '+(open?'open':'')} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{pages.map(([label,path])=><NavLink end key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}</div></div></nav>;
}
