<template>
    <header class="bg-black bg-opacity-40 text-white flex justify-between items-center my-[32px] py-[18px] px-[31px] rounded-xl absolute w-[90%] left-1/2 transform -translate-x-1/2">
        <img src="@/assets/logo/logo-header.svg" alt="logo" />
        <div class="flex">
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li class="ml-[25px]">
                Découvrir
            </li>
            <li class="ml-[25px]">
                Activités
            </li>
            <li class="ml-[25px]">
                <RouterLink to="/tarifs">Tarifs</RouterLink>
            </li>
            <li class="ml-[25px]">
                <RouterLink to="/contact">Contact</RouterLink>
            </li>
        </div>
    </header>
</template>