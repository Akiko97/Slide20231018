interface Events {
  slidechanged: (()=>void) | null
}

export const events: Events = {
  slidechanged: null
}
