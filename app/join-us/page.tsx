import JoinUsForm from './JoinUsForm';
import Checkbox from './form/Checkbox';
import SelectButton from './form/SelectButton';
import SubTitle from './form/SubTitle';
import TextArea from './form/TextArea';
import TextInput from './form/TextInput';
import Title from './form/Title';

  export default function page() {
  return (
    <main className={'bg-purple min-h-screen flex flex-col p-6 space-y-14'}>
      <div className='flex justify-start'><button className={'bg-orange text-white shadow-sharp rounded-full border-none hover:bg-neon hover:text-darkGray transition px-4'}>חזרה לעמוד</button></div>
      <div className={'flex justify-center'}><Title /></div>
      <section dir={'rtl'} className='grid grid-cols-3 gap-x-20'>
        <div className='flex flex-col col-span-1'>
          <SubTitle>פרטים אישיים</SubTitle>
          <TextInput placeholder='שם מלא*'/>
          <TextInput placeholder='מייל*'/>
          <TextInput placeholder='לינקדין (לא חובה אבל מגניב)'/>
        </div>
        <div className='flex flex-col col-span-1'>
          <SubTitle>אני בוגר.ת של...*</SubTitle>
          <TextInput placeholder='קורס מקצועי'/>
          <TextInput placeholder='תואר ראשון'/>
          <TextInput placeholder='תואר שני'/>
        </div>
        <div className='flex flex-col col-span-1'>
          <SubTitle>ספרו על הרקע המקצועי שלכם.ן בכמה משפטים, וכל דבר אחר שתרצו לשתף איתנו...</SubTitle>
          <TextArea />
        </div>
      </section>
      <section dir={'rtl'}>
        <SubTitle>באיזה תחומים תרצו לתרום?*</SubTitle>
        <div className="grid grid-cols-5 gap-x-8">
          <SelectButton className={'col-span-1'}>עיצוב חווית משתמש</SelectButton>
          <SelectButton className={'col-span-1'}>עיצוב קמפיינים</SelectButton>
          <SelectButton className={'col-span-1'}>קופירייטינג</SelectButton>
          <SelectButton className={'col-span-1'}>אינפוגרפיקה</SelectButton>
          <SelectButton className={'col-span-1'}>עיצוב גרפי</SelectButton>

          <SelectButton className={'col-span-1'}>פיתוח תוכנה</SelectButton>
          <SelectButton className={'col-span-1'}>ניתוח נתונים</SelectButton>
          <SelectButton className={'col-span-1'}>ניהול מוצר</SelectButton>
          <SelectButton className={'col-span-1'}>ניהול מערכות מידע</SelectButton>
          <SelectButton className={'col-span-1'}>ניהול פרויקט</SelectButton>
        </div>
      </section>
      <section dir={'rtl'} className={'space-y-5'}>
        <SubTitle>באילו פרויקטים תשמחו להשתתף?</SubTitle>
        <div className={'flex justify-between'}>
          <Checkbox label={"ספר החוקים הפתוח"} />
          <Checkbox label={"דאטא בוס"} isSelected={true}/>
          <Checkbox label={"פנסיה פתוחה"} />
          <Checkbox label={"דאטא סיטי"} />
          <Checkbox label={"מפתח התקציב"} />
          <Checkbox label={"כנסת פתוחה"} />
        </div>
      </section>
      <section dir={'rtl'} className='flex'>
        <div className='flex flex-col grow-[3] min-h-40'>
          <SubTitle>לפני שנסיים, האם יש לכם.ן שאלות נוספות?</SubTitle>
          <TextArea />
        </div>
        <div className={'grow-[1] flex items-center justify-center'}>
          <button className={'bg-neon shadow-sharp rounded-full border-none hover:bg-orange hover:text-white text-darkGray font-bold transition px-24 py-3'}>שליחת השאלון</button>
        </div>
      </section>
    </main>
  );
}

