import SelectButton from "../form/SelectButton"
import SubTitle from "../form/SubTitle"

const ProfSkills = () => {
    return (
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
    )

}

export default ProfSkills