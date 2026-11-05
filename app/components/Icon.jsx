import {
  Bus, TrainFront, Monitor, Megaphone, Sparkles, MessageCircle, TrendingUp,
  Clock, MapPin, Phone, Mail, Download, Menu, X, Play, Pause, ChevronDown,
  ChevronLeft, ChevronRight,
} from 'lucide-react'

const ICONS = {
  Bus, TrainFront, Monitor, Megaphone, Sparkles, MessageCircle, TrendingUp,
  Clock, MapPin, Phone, Mail, Download, Menu, X, Play, Pause, ChevronDown,
  ChevronLeft, ChevronRight,
}

// 데이터 파일에서 아이콘을 문자열 이름으로 지정할 수 있게 해주는 래퍼
export default function Icon({ name, ...props }) {
  const C = ICONS[name]
  return C ? <C aria-hidden="true" {...props} /> : null
}
