import { 
    MusicalNoteIcon,
    UserGroupIcon,
    AcademicCapIcon,
    MicrophoneIcon,
    BookOpenIcon
  } from '@heroicons/react/24/outline';

const COURSES_DATA = [
    {
      id: 1,
      category: 'PIANO',
      title: 'Piano Cơ bản - Nâng cao',
      description: 'Khóa học Piano cơ bản đến nâng cao, giúp phát triển kỹ năng chơi đàn một cách toàn diện.',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-800',
      iconColor: 'text-amber-500',
      Icon: MusicalNoteIcon
    },
    {
      id: 2,
      category: 'PIANO 1-1',
      title: 'Piano kèm 1-1 Cơ bản - Nâng cao',
      description: 'Học Piano với giáo viên riêng, lộ trình được cá nhân hóa theo nhu cầu và khả năng của học viên.',
      bgColor: 'bg-rose-100',
      textColor: 'text-rose-800',
      iconColor: 'text-rose-500',
      Icon: UserGroupIcon
    },
    {
      id: 3,
      category: 'CERTIFICATE',
      title: 'Luyện Thi Chứng Chỉ',
      description: 'Khóa học chuyên sâu giúp bạn chuẩn bị cho các kỳ thi lấy chứng chỉ âm nhạc quốc tế.',
      bgColor: 'bg-violet-100',
      textColor: 'text-violet-800',
      iconColor: 'text-violet-500',
      Icon: AcademicCapIcon
    },
    {
      id: 4,
      category: 'VOCAL',
      title: 'Thanh Nhạc',
      description: 'Phát triển giọng hát của học viên với các kỹ thuật thanh nhạc chuyên sâu.',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-500',
      Icon: MicrophoneIcon
    },
    {
      id: 5,
      category: 'THEORY',
      title: 'Cảm Thụ Âm Nhạc',
      description: 'Cảm thụ âm nhạc giúp cho trẻ phát triển sớm khả năng âm nhạc',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-500',
      Icon: BookOpenIcon
    }
  ];

export default COURSES_DATA;