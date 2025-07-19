// واجهة بيانات المنشور
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// واجهة خصائص موديال المنشور
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// واجهة خصائص المنشور (الموجود في PostCard)
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// واجهة بيانات المستخدم
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// واجهة خصائص موديال المستخدم
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
