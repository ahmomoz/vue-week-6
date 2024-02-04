<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <RouterLink to="/products/a" class="list-group-item list-group-item-action" aria-current="true">
                    A
                </RouterLink>
                <RouterLink to="/products/b" class="list-group-item list-group-item-action">B</RouterLink>
            </div>
        </div>
        <div class="col-8">
            <RouterView />
        </div>
    </div>
</template>
