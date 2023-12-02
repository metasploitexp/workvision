<template>
    <div class="boards-page">
        <DesktopPanel />
        <div class= "favorite-boards">
            <h4>
			Favorite Boards 
            
		    </h4>
                    <h4>Create Boards</h4>
                        <div class="create-exist">
                            <CreateBoard />
                            <ExistBoard/>
                        </div>
        </div>
    </div>
</template>

<script>
import { DesktopPanel } from '@/widgets/DesktopPanel';
import { FavoriteBoards } from '@/widgets/FavoriteBoards';
import { CreateBoard } from '@/features/CreateBoard';
import { ExistBoard } from '@/features/ExistBoard';

export default {
    name: 'boardsPage',
    components: {
        DesktopPanel,
        FavoriteBoards,
        CreateBoard,
        ExistBoard
    }
}
</script>

<style lang="scss">
	h4 {
		margin-bottom: 10px;
        margin-left: 25px;
		}
    .boards-page {
        padding: 0 20px;
        display: flex;
        .favorite-boards {
            display: flex;
            flex-direction: column;
            .create-exist {
                display: flex;
                width: 700px;
                height: 45px;
            }
        }
    }
</style>