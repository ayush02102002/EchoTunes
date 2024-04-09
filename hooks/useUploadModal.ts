import {create} from "zustand";
interface useUploadModal{
    isOpen:boolean;
    onOpen:()=> void;
    onClose:()=> void;
};

const useAuthModal=create<useUploadModal>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}));

export default useAuthModal;