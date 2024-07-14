'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { SubmitHandler, useForm } from 'react-hook-form';

import { NewsletterSchema } from './NewsletterForm.schema';
import { NewsletterFormData } from './NewsletterForm.types';

export default function NewsletterForm() {
  const { register, handleSubmit } = useForm<NewsletterFormData>({
    resolver: yupResolver(NewsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <InputText {...register('email')} />

      <Button type="submit">Subscribe</Button>
    </form>
  );
}
