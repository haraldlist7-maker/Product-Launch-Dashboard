// components/config.js

export const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

export const LIFECYCLE_STYLE = {
  GROW:    { bg:"#e8f5e9", color:"#2e7d32", border:"#a5d6a7" },
  LAUNCH:  { bg:"#e3f2fd", color:"#1565c0", border:"#90caf9" },
  DEVELOP: { bg:"#fff8e1", color:"#e65100", border:"#ffcc02" },
  SUNSET:  { bg:"#fce4ec", color:"#880e4f", border:"#f48fb1" },
};

export const RESTATUS_STYLE = {
  "RE+ Live":     { bg:"#1b5e20", color:"#fff" },
  "Not started":  { bg:"#e0e0e0", color:"#555" },
  "In progress":  { bg:"#0d47a1", color:"#fff" },
  "Pilot":        { bg:"#4a148c", color:"#fff" },
  "End of Sale":  { bg:"#b71c1c", color:"#fff" },
  "Early design": { bg:"#e65100", color:"#fff" },
  "In Dev":       { bg:"#006064", color:"#fff" },
};

export const MARKET_STYLE = {
  "Fully":       { bg:"#1b5e20", color:"#fff" },
  "Partial":     { bg:"#e65100", color:"#fff" },
  "Planning":    { bg:"#1565c0", color:"#fff" },
  "Commercial":  { bg:"#00695c", color:"#fff" },
  "Not":         { bg:"#e0e0e0", color:"#888" },
  "In Dev":      { bg:"#006064", color:"#fff" },
  "In Planning": { bg:"#1565c0", color:"#fff" },
  "—":           { bg:"transparent", color:"#bbb" },
};

export const TIMELINE_COLORS = {
  GROW:    "#388e3c",
  LAUNCH:  "#1976d2",
  DEVELOP: "#f57c00",
  SUNSET:  "#c62828",
};

export const CATEGORY_COLORS = {
  "Office Print Software & Services": "#1565c0",
  "Lockers":            "#6a1b9a",
  "Workplace":          "#00695c",
  "Process Automation": "#c62828",
  "Document Solutions": "#e65100",
  "Managed Services":   "#2e7d32",
  "Hardware":           "#4527a0",
};

// Static enrichment data — lifecycle, market availability, category
// (these aren't in Asana so we maintain them here)
export const PROJECT_META = {
  "1213398936609483": { category:"Office Print Software & Services", lifecycle:"GROW",    reStatus:"RE+ Live",    date:null,     market:{emea:"Fully",      north:"Fully",      dach:"Fully",      pafra:"Fully"},    timeline:{start:0, end:11} },
  "1213380687416285": { category:"Office Print Software & Services", lifecycle:"GROW",    reStatus:"RE+ Live",    date:"10 Nov", market:{emea:"Fully",      north:"Fully",      dach:"Fully",      pafra:"Fully"},    timeline:{start:0, end:10} },
  "1213375220944961": { category:"Office Print Software & Services", lifecycle:"DEVELOP", reStatus:"Not started", date:"1 Oct",  market:{emea:"Not",        north:"Not",        dach:"Not",        pafra:"Not"},      timeline:{start:9, end:11} },
  "1212750668315375": { category:"Office Print Software & Services", lifecycle:"LAUNCH",  reStatus:"RE+ Live",    date:"10 Dec", market:{emea:"Partial",    north:"Partial",    dach:"Planning",   pafra:"Partial"},  timeline:{start:11,end:11} },
  "1212764211336637": { category:"Office Print Software & Services", lifecycle:"DEVELOP", reStatus:"Not started", date:"27 Mar", market:{emea:"Not",        north:"Not",        dach:"Not",        pafra:"Not"},      timeline:{start:2, end:3}  },
  "1212421834424221": { category:"Office Print Software & Services", lifecycle:"DEVELOP", reStatus:"Not started", date:"1 Jun",  market:{emea:"Not",        north:"Not",        dach:"Not",        pafra:"Not"},      timeline:{start:5, end:7}  },
  "1212676532627803": { category:"Office Print Software & Services", lifecycle:"LAUNCH",  reStatus:"RE+ Live",    date:"28 Jan", market:{emea:"Commercial", north:"Commercial", dach:"Commercial", pafra:"Commercial"},timeline:{start:0, end:2}  },
  "1213414485069009": { category:"Lockers",            lifecycle:"GROW",    reStatus:"In progress", date:null,     market:{emea:"—",     north:"—",     dach:"—",     pafra:"—"},    timeline:{start:0, end:11} },
  "1213414387301707": { category:"Lockers",            lifecycle:"SUNSET",  reStatus:"End of Sale", date:null,     market:{emea:"—",     north:"—",     dach:"—",     pafra:"—"},    timeline:{start:0, end:11} },
  "1213083275493679": { category:"Lockers",            lifecycle:"GROW",    reStatus:"Early design",date:"5 Oct",  market:{emea:"In Dev",north:"—",     dach:"—",     pafra:"—"},    timeline:{start:8, end:9}  },
  "1213012542844515": { category:"Workplace",          lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:3, end:8}  },
  "1213431673331526": { category:"Workplace",          lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:4, end:9}  },
  "1213025941019311": { category:"Workplace",          lifecycle:"LAUNCH",  reStatus:"Not started", date:"Jun",    market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:5, end:5}  },
  "1213200240110498": { category:"Workplace",          lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:4, end:9}  },
  "1212902224795489": { category:"Process Automation", lifecycle:"LAUNCH",  reStatus:"Pilot",       date:"1 Jun",  market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:0, end:6}  },
  "1213421567192532": { category:"Document Solutions", lifecycle:"GROW",    reStatus:"RE+ Live",    date:null,     market:{emea:"Fully", north:"Fully", dach:"Fully", pafra:"Fully"},timeline:{start:0, end:11} },
  "1213421567192518": { category:"Document Solutions", lifecycle:"GROW",    reStatus:"RE+ Live",    date:null,     market:{emea:"Fully", north:"Partial",dach:"Partial",pafra:"Partial"},timeline:{start:0,end:11}},
  "1213421567192248": { category:"Document Solutions", lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:4, end:9}  },
  "1213421567192264": { category:"Document Solutions", lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:4, end:9}  },
  "1213421567192219": { category:"Managed Services",   lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:5, end:11} },
  "1213421567192374": { category:"Managed Services",   lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:5, end:11} },
  "1213421567192479": { category:"Managed Services",   lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:5, end:11} },
  "1213421567192580": { category:"Managed Services",   lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:3, end:9}  },
  "1213421567192442": { category:"Hardware",           lifecycle:"LAUNCH",  reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:6, end:11} },
  "1213421567192410": { category:"Hardware",           lifecycle:"LAUNCH",  reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:6, end:11} },
  "1213465080006687": { category:"Hardware",           lifecycle:"LAUNCH",  reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:5, end:9}  },
  "1213421567192278": { category:"Hardware",           lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:3, end:8}  },
  "1213421567192292": { category:"Hardware",           lifecycle:"DEVELOP", reStatus:"Not started", date:null,     market:{emea:"Not",   north:"Not",   dach:"Not",   pafra:"Not"},  timeline:{start:3, end:8}  },
};

export function abbr(v) {
  const map = { "Commercial":"Comm.", "Planning":"Plan.", "Partial":"Part.", "Not":"Not", "Fully":"Fully", "In Dev":"Dev", "—":"—" };
  return map[v] || v;
}

export function fmtDate(d) {
  if (!d) return null;
  return new Date(d).toLocaleDateString("en-GB", { day:"numeric", month:"short", year:"numeric" });
}

export function isSoon(d) {
  if (!d) return false;
  const diff = new Date(d) - new Date();
  return diff > 0 && diff < 90 * 86400000;
}
