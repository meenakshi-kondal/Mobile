export interface InputData {
    placeholder: String,
    required?: Boolean,
    value?: String,
    id: String,
    validateMessage?: String,
    style?: {
      'font-size'?: String,
      border?: String,
    }
}

export interface ButtonData {
  value?: String,
  style?: {
    'font-size'?: String,
    color?: String,
    border?: String,
    width? : String
  },
  icon? :String
}

export interface InputFormat {
  value: string,
  id: String,
}