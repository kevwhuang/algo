export const CLASS_BUTTON = 'active:bg-white-10 focus-visible:bg-white-20 focus-visible:border-cyan-80 focus-visible:text-cyan-bright focus-visible:text-shadow-[0_0_1.25rem_var(--color-cyan-80)] hover:bg-white-20 hover:border-cyan-80 hover:text-cyan-bright hover:text-shadow-[0_0_1.25rem_var(--color-cyan-80)] inline-block px-8 py-5 border border-white-40 font-mono indent-[0.2em] text-base tracking-[0.2em] uppercase text-white-60 duration-(--duration-fast) transition-[background-color,border-color,color,text-shadow]';
export const CLASS_ERROR_CODE = 'mb-(--heading-margin) font-semibold indent-[0.1em] leading-none text-hero tracking-widest bg-clip-text bg-linear-to-b from-white-60 text-transparent to-white-40';
export const DIFFICULTIES = ['easy', 'medium', 'hard'] as const;
export const MEETUP_URL = 'https://www.meetup.com/algoatx';

export const ROUTES = [
    { href: '/', label: 'Home' },
] as const;
