import JoinUsForm from './JoinUsForm';
import TextArea from './form/TextArea';
import TextInput from './form/TextInput';
import Title from './form/Title';

  export default function page() {
  return (
    <main className={'bg-purple flex flex-col p-6'}>
      <div className='flex justify-start'><button className={'bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4'}>חזרה לעמוד</button></div>
      <div className={'flex justify-center'}><Title /></div>
      <section dir={'rtl'} className='flex'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-neon mb-4'>פרטים אישיים</h2>
          <TextInput placeholder='שם מלא*'/>
          <TextInput placeholder='מייל*'/>
          <TextInput placeholder='לינקדין (לא חובה אבל מגניב)'/>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold text-neon mb-4'>אני בוגר.ת של...*</h2>
          <TextInput placeholder='קורס מקצועי'/>
          <TextInput placeholder='תואר ראשון'/>
          <TextInput placeholder='תואר שני'/>
        </div>
        <div>
          <TextArea />
        </div>
      </section>
    </main>
  );
}

