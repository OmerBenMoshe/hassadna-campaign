import JoinUsForm from './JoinUsForm';
import SubTitle from './form/SubTitle';
import TextArea from './form/TextArea';
import TextInput from './form/TextInput';
import Title from './form/Title';

  export default function page() {
  return (
    <main className={'bg-purple flex flex-col p-6'}>
      <div className='flex justify-start'><button className={'bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4'}>חזרה לעמוד</button></div>
      <div className={'flex justify-center'}><Title /></div>
      <section dir={'rtl'} className='flex justify-between'>
        <div className='flex flex-col flex-1'>
          <SubTitle>פרטים אישיים</SubTitle>
          <TextInput placeholder='שם מלא*'/>
          <TextInput placeholder='מייל*'/>
          <TextInput placeholder='לינקדין (לא חובה אבל מגניב)'/>
        </div>
        <div className='flex flex-col flex-1 mx-20'>
          <SubTitle>אני בוגר.ת של...*</SubTitle>
          <TextInput placeholder='קורס מקצועי'/>
          <TextInput placeholder='תואר ראשון'/>
          <TextInput placeholder='תואר שני'/>
        </div>
        <div className='flex flex-col flex-1'>
          <SubTitle>אני בוגר.ת של...*</SubTitle>
          <TextArea />
        </div>
      </section>

    </main>
  );
}

