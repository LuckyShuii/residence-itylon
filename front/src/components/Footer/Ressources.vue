<script setup lang="ts">
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            <h4 class="font-semibold mb-[15px]">Ressources</h4>
            <li>
                <RouterLink to="/politique-de-confidentialite">
                    <p class="hover:border-b-[1px] border-[black] inline-block">Politique de confidentialité</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/mentions-legales">
                    <p class="hover:border-b-[1px] border-[black] inline-block">Mentions légales</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/tarifs">
                    <p class="hover:border-b-[1px] border-[black] inline-block">Tarifs</p>
                </RouterLink>
            </li>
        </div>
    </div>
</template>