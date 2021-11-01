import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const IdeaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.idea?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="product"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product
        </Label>
        <TextField
          name="product"
          defaultValue={props.idea?.product}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="product" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.idea?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.idea?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>
        <NumberField
          name="value"
          defaultValue={props.idea?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="value" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        <TextField
          name="author"
          defaultValue={props.idea?.author}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="author" className="rw-field-error" />

        <Label
          name="vendor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vendor
        </Label>
        <TextField
          name="vendor"
          defaultValue={props.idea?.vendor}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vendor" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>
        <CheckboxField
          name="active"
          defaultChecked={props.idea?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="active" className="rw-field-error" />

        <Label
          name="finished"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Finished
        </Label>
        <CheckboxField
          name="finished"
          defaultChecked={props.idea?.finished}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="finished" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IdeaForm
