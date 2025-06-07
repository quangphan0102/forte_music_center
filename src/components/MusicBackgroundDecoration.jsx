import { motion } from 'framer-motion';
import { 
  MusicalNoteIcon,
  MicrophoneIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export default function MusicBackgroundDecoration({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top Area */}
      <div className="absolute -left-4 top-20 transform -rotate-12">
        <MusicalNoteIcon className="w-12 h-12 text-blue-100" />
      </div>
      <div className="absolute left-20 top-12">
        <MicrophoneIcon className="w-8 h-8 text-amber-100" />
      </div>
      <div className="absolute left-40 top-28 transform rotate-45">
        <BookOpenIcon className="w-6 h-6 text-rose-100" />
      </div>
      <div className="absolute left-60 top-16">
        <MusicalNoteIcon className="w-10 h-10 text-violet-100" />
      </div>

      <div className="absolute right-16 top-24 transform rotate-12">
        <BookOpenIcon className="w-10 h-10 text-rose-100" />
      </div>
      <div className="absolute right-4 top-40">
        <MusicalNoteIcon className="w-6 h-6 text-violet-100" />
      </div>
      <div className="absolute right-36 top-12">
        <MicrophoneIcon className="w-8 h-8 text-yellow-100" />
      </div>
      <div className="absolute right-52 top-32 transform -rotate-12">
        <BookOpenIcon className="w-7 h-7 text-blue-100" />
      </div>

      {/* Middle Area */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 transform -rotate-45">
        <MicrophoneIcon className="w-16 h-16 text-yellow-100" />
      </div>
      <div className="absolute left-1/3 top-1/2 -translate-y-1/4 transform rotate-12">
        <BookOpenIcon className="w-12 h-12 text-blue-100" />
      </div>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 transform rotate-12">
        <MusicalNoteIcon className="w-14 h-14 text-blue-100" />
      </div>
      <div className="absolute right-1/3 top-1/2 -translate-y-1/4 transform -rotate-12">
        <MicrophoneIcon className="w-10 h-10 text-rose-100" />
      </div>

      {/* Bottom Area */}
      <div className="absolute left-8 bottom-16 transform rotate-45">
        <BookOpenIcon className="w-10 h-10 text-amber-100" />
      </div>
      <div className="absolute left-32 bottom-24">
        <MusicalNoteIcon className="w-8 h-8 text-rose-100" />
      </div>
      <div className="absolute left-52 bottom-12 transform -rotate-45">
        <MicrophoneIcon className="w-12 h-12 text-violet-100" />
      </div>
      <div className="absolute left-72 bottom-28">
        <BookOpenIcon className="w-6 h-6 text-yellow-100" />
      </div>

      <div className="absolute right-12 bottom-20 transform -rotate-12">
        <MicrophoneIcon className="w-12 h-12 text-violet-100" />
      </div>
      <div className="absolute right-36 bottom-12">
        <MusicalNoteIcon className="w-6 h-6 text-yellow-100" />
      </div>
      <div className="absolute right-56 bottom-28 transform rotate-45">
        <BookOpenIcon className="w-8 h-8 text-blue-100" />
      </div>
      <div className="absolute right-72 bottom-16">
        <MicrophoneIcon className="w-10 h-10 text-amber-100" />
      </div>

      {/* Floating Animations */}
      <motion.div
        className="absolute left-1/3 top-1/3"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MusicalNoteIcon className="w-8 h-8 text-blue-100" />
      </motion.div>

      <motion.div
        className="absolute right-1/3 bottom-1/3"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MicrophoneIcon className="w-10 h-10 text-rose-100" />
      </motion.div>

      <motion.div
        className="absolute left-2/3 top-1/4"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <BookOpenIcon className="w-7 h-7 text-yellow-100" />
      </motion.div>

      <motion.div
        className="absolute right-2/3 bottom-1/4"
        animate={{
          x: [0, -15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MusicalNoteIcon className="w-9 h-9 text-violet-100" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/4"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <MicrophoneIcon className="w-6 h-6 text-amber-100" />
      </motion.div>
    </div>
  );
} 