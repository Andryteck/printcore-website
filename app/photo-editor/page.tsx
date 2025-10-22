import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MultiPhotoEditor from '@/components/MultiPhotoEditor';

export const metadata = {
  title: 'Редактор фотографий | PrintCore',
  description: 'Загрузите и обрежьте фотографии под нужный размер для печати',
};

export default function PhotoEditorPage() {
  return (
    <>
      <Header />
      <MultiPhotoEditor />
      <Footer />
    </>
  );
}

