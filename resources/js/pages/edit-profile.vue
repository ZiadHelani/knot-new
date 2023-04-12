


<template>
  <div>
    <form>
      <div
        class="image"
        style="display: flex; text-align: center; align-items: center;"
      >
        <div style="background-color: #7367F0; border-radius: 50%; width: 100px; height: 100px;" />
        <VBtn
          style="margin-left: 50px;"
        >
          Upload
        </VBtn>
      </div>
      <VFileInput
        class="mt-5"
        label="Change Profile Image"
        variant="solo"
      />

      <VTextField
        class="mt-5"
        label="Name"
      />
      
      <VTextField
        class="mt-5"
        label="E-mail"
      />
      <VTextField
        class="mt-5"
        :counter="10"
        label="Phone Number"
      />
      <VTextField
        class="mt-5"
        label="Job Title"
      />
      <VTextField
        class="mt-5"
        label="Organization"
      />

      <div class="mt-5">
        <VBtn
          class="me-4"
          type="submit"
        >
          Edit
        </VBtn>

        <VBtn>
          clear
        </VBtn>
      </div>
    </form>
  </div>
</template>
