import {useEffect, useState} from "react";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    }
}

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [valid, setValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                case 'email':
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [isEmpty])

    return {
        isEmpty,
        valid,
        emailError
    }
}