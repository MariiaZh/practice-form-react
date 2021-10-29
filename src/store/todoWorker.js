import { createSlice } from "@reduxjs/toolkit";
import initialData from "../screens/todoapp/components/initialData";


const initialState = {
    initialData: initialData,
    dragCard: null,
}

const todoWorker = createSlice({
    name: "todoWorker",
    initialState,
    reducers: {
        chooseDragCard(state, action) {
            const item = state.initialData.find(item => item.id === action.payload)
            state.dragCard = {
                ...item
            }
        },

        changeOrder(state, action) {
            //console.log("inside reducer change order")
            const shuffleIndex = findIndex(state.initialData, action.payload);
            const dragCardOrder = state.dragCard.order;
            state.initialData = state.initialData.map((item, index) => {
                if (item.id === state.dragCard.id) {
                    return {
                        id: item.id,
                        order: shuffleIndex + 1,
                        task: item.task,
                        inProgress: item.inProgress,
                        editModal: item.editModal
                    }
                }
                if (index === shuffleIndex) {
                    return {
                        id: item.id,
                        order: dragCardOrder,
                        task: item.task,
                        inProgress: item.inProgress,
                        editModal: item.editModal
                    }
                }
                return {
                    ...item
                }
            })
            state.initialData = sortArray(state.initialData);
        },

        checkFinishedTask(state, action) {
            const shuffleIndex = findIndex(state.initialData, action.payload);
            state.initialData = state.initialData.map((item, index) => {
                if (index === shuffleIndex) {
                    return {
                        id: item.id,
                        order: state.initialData.length,
                        task: item.task,
                        inProgress: false,
                        editModal: item.editModal
                    }
                }
                if (index > shuffleIndex) {
                    return {
                        id: item.id,
                        order: item.order - 1,
                        task: item.task,
                        inProgress: item.inProgress,
                        editModal: item.editModal
                    }
                }
                return {
                    ...item
                }
            });
            state.initialData = sortArray(state.initialData);
        },

        uncheckFinishedTask(state, action) {
            const shuffleIndex = findIndex(state.initialData, action.payload);
            state.initialData = state.initialData.map((item, index) => {
                if (index < shuffleIndex) {
                    return {
                        id: item.id,
                        order: item.order + 1,
                        task: item.task,
                        inProgress: item.inProgress,
                        editModal: item.editModal
                    }
                }
                if (index === shuffleIndex) {
                    return {
                        id: item.id,
                        order: 1,
                        task: item.task,
                        inProgress: true,
                        editModal: item.editModal
                    }
                }
                return {
                    ...item
                }
            })
            state.initialData = sortArray(state.initialData);
        },

        updateTask(state, action) {
            state.initialData = state.initialData.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        id: item.id,
                        order: item.order,
                        task: action.payload.value,
                        inProgress: item.inProgress,
                        editModal: !item.editModal
                    }
                }
                return {
                    ...item
                }
            })
        },

        deleteTask(state, action) {
            const deletedIndex = findIndex(state.initialData, action.payload);
            state.initialData = state.initialData.filter(item => item.id !== action.payload);
            state.initialData = state.initialData.map((item, index) => {
                if (index >= deletedIndex) {
                    return {
                        id: item.id,
                        order: item.order + 1,
                        task: item.task,
                        inProgress: item.inProgress,
                        editModal: item.editModal
                    }
                }
                return {
                    ...item
                }
            })
            state.initialData = sortArray(state.initialData);
        },

        showEditModal(state, action) {
            const currentIndex = findIndex(state.initialData, action.payload);
            state.initialData[currentIndex] = {
                id: state.initialData[currentIndex].id,
                order: state.initialData[currentIndex].order,
                task: state.initialData[currentIndex].task,
                inProgress: state.initialData[currentIndex].inProgress,
                editModal: !state.initialData[currentIndex].editModal
            }
        },
    },
})

export const todoWorkerActions = todoWorker.actions;
export default todoWorker.reducer;

const sortArray = (arr) => {
    return arr.sort((a, b) => { return a.order - b.order });
}
const findIndex = (arr, id) => {
    return arr.findIndex((shuffleItem) => shuffleItem.id === id);
}


