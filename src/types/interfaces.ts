export interface Student {
  id: number;
  name: string;
  surname: string;
  status: 'present' | 'virtual' | 'absent' | 'late';
  avatar: string;
}