
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name = "content", control, label, defaultValue = "", height = 500 }) {
  return (
    <div className='w-full mb-4'>
      {label && <label className='block mb-2 text-sm font-semibold text-gray-700'>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey='acw1r4fm7u0h3fzvnzirq9c43w98rig9vpa35n1ndvp99nq5'
            value={value}
            initialValue={defaultValue}
            init={{
              height,
              menubar: true,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code",
                "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
              ],
              toolbar: 'undo redo | formatselect | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
