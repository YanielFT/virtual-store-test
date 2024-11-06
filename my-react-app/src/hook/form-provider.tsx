import {
  FormProvider as Form,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
  autocomplete?: string | undefined;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  autocomplete,
}: Props) {
  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        autoComplete={autocomplete}
      >
        {children}
      </form>
    </Form>
  );
}
