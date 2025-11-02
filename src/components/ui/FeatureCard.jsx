import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl hover:border-aqua-500/50 transition-all duration-300">
        <div className="mb-4 inline-block p-3 bg-gradient-to-br from-aqua-500/20 to-violet-500/20 rounded-xl">
          <Icon className="w-8 h-8 text-aqua-400" />
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-3 text-white">
          {title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default FeatureCard