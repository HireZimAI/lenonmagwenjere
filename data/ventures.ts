export type Venture={slug:string;name:string;role:string;line:string;body:string;detail?:string[];href:string;weight:'lead'|'portfolio'};
export const ventures:Venture[]=[
{slug:'hirezim-ai',name:'HireZim AI',role:'Co-founder',line:'AI systems for business',body:'HireZim AI designs, builds, deploys, and governs AI systems across revenue, operations, and leadership.',href:'https://hirezim.ai',weight:'lead'},
{slug:'kura',name:'Kura Growth Systems',role:'',line:'From an enquiry to a customer',body:'Kura helps service businesses capture enquiries, follow up, nurture leads, and reconnect with past customers. It is a growth system, not a product limited to one industry.',href:'https://growithkurasystems.com',weight:'lead'},
{slug:'asap-travel-africa',name:'ASAP Travel Africa',role:'',line:'Travel and mobility in Africa',body:'Vehicle rental, transfers, and travel services for visitors and returning diaspora. A different kind of business, built around the same need for reliable operations.',href:'https://asaptravelafrica.com',weight:'lead'},
{slug:'builders-handbook',name:"The Builder's Handbook",role:'Host',line:'Conversations with builders',body:'A platform for the ideas, decisions, and lessons behind businesses and communities.',href:'https://www.thebuildershandbook.com',weight:'portfolio'}];
export const leadVentures=ventures.filter(v=>v.weight==='lead');
