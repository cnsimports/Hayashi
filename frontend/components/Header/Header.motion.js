export const container = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.444,
      staggerChildren: 0.05,
      ease: 'linear'
    }
  }
}

export const item = {
  hidden: {
    opacity: 0,
    x: -30
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1]
    }
  }
}

export const navContainer = {
  hidden: {
    opacity: 0,
    y: "-109%",
    transition: {
      when: 'afterChildren',
      ease: 'linear',
    }
  },
  show: {
    opacity: 1,
    y: '0',
    transition: {
      ease: 'linear',
      duration: 0.3,
    }
  }
}
