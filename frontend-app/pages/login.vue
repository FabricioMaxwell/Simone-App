<template>
    <form class="flex flex-col gap-2">
        <div class="bg-slate-100 p-3">
            <input type="text" class="bg-inherit border-transparent outline-none" placeholder="Email">
            <label for=""></label>
        </div>
        <div class="bg-slate-50 p-3 ">
            <input type="text" class="bg-inherit border-transparent outline-none " placeholder="Senha">
            <label for=""></label>   
        </div>
    </form>
</template>


<script setup lang="ts">

definePageMeta({
  layout: 'auth' // Usando o layout "auth" para a página de login
})

</script>