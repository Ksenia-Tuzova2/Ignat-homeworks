import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
 

 
     const  mappedOptions = options?.map((el)=><option>{el}</option>); // map options with key
  
   
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
     
        onChange&&onChange(e)
        onChangeOption&&onChangeOption(e.currentTarget.value)
    
       
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
