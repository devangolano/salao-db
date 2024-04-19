<template>
    <div>
        <h1 class="flex justify-center items-center pt-8 text-xl font-sen">Bem vinda ao</h1>
        <h1 class="flex justify-center items-center pt-2 text-3xl text-[#64191b] font-bold">DB Hair Therapy</h1>
        <p class="flex flex-col items-center justify-center text-xs pt-1 md:font-medium px-4">
            Somos um Centro de Terapia Capilar e Salão de Beleza dedicado à saúde e bem-estar do seu cabelo...
            <span :class="{ 'hidden': !open }">
                Especializados em saúde capilar integrativa, nossa empresa oferece uma abordagem holística que vai além
                da estética, focando no cuidado completo do couro cabeludo e dos fios. Com tratamentos personalizados e
                serviços de beleza de alta qualidade, estamos comprometidos em proporcionar uma experiência
                transformadora
                para nossos clientes. Venha conhecer nossa expertise e descubra o segredo de um cabelo saudável e
                radiante
                conosco!
            </span>
        </p>
        <button :class="{ '': open, ' cursor-not-allowed': !open }" @click="ver" class="px-4 py-2 rounded">Continuar a
            ler...</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

function ver() {
    open.value = !open.value;
}
</script>
