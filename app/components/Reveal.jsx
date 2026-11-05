import { motion } from 'framer-motion'

// 스크롤해서 보일 때 한 번 살짝 올라오며 나타남 (원본 사이트 동작)
export default function Reveal({ children, y = 30, delay = 0, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
