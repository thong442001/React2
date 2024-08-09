import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

// ************** User *****************

//đăng nhập
//http://localhost:3000/tai_khoan/Login
export const login = createAsyncThunk(
    "tai_khoan/Login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/tai_khoan/Login", data);
            //console.log(response);
            if (response.status == true) {
                return response;
            }
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

//đăng kí
//http://localhost:3000/tai_khoan/add
export const apiDangKi = createAsyncThunk(
    "tai_khoan/add",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/tai_khoan/add", data);
            //console.log(response);
            if (response.status == true) {
                return response;
            }
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

//Edit user
//http://localhost:3000/tai_khoan/edit
export const apiEditUser = createAsyncThunk(
    "tai_khoan/edit",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper(data.token)
                .post("/tai_khoan/edit", data);
            //console.log(response);
            if (response.status == true) {
                return response;
            }
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);




// ************** Product *****************

//get list loai
//http://localhost:3000/loai/list
export const listCates = createAsyncThunk(
    "loai/list",
    async (data, { rejectWithValue }) => {// data ko dùng tới cũng phải để vào
        try {
            const response = await AxiosHelper(data.token)
                .get("/loai/list");
            //console.log(response.data);
            if (response.status == true) {
                return response.data;
            }
        } catch (error) {
            //console.error("=>> " + error.status);
            return rejectWithValue(error);
        }
    }
);

//get list san_pham theo loại
//http://localhost:3000/san_pham/list-loai
export const listProducts = createAsyncThunk(
    "san_pham/list-loai",
    async (data, { rejectWithValue }) => {
        try {
            //const dispatch = useDispatch()
            const response = await AxiosHelper(data.token)
                .get(`/san_pham/list-loai?_id_loai=${data._id_loai}`);
            //console.log(response.data);
            if (response.status == true) {
                return response.data;
            }

        } catch (error) {
            //console.error("=>> " + error.status);
            return rejectWithValue(error);
        }
    }
);

//chi tiet san pham
//http://localhost:3000/san_pham/chi_tiet_san_pham
export const apiChiTietSanPham = createAsyncThunk(
    "san_pham/list-loai",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper(data.token)
                .get(`/san_pham/chi_tiet_san_pham?_id_san_pham=${data._id_san_pham}`);
            //console.log(response.data);
            if (response.status == true) {
                return response.data;
            }
        } catch (error) {
            //console.error("=>> " + error.status);
            return rejectWithValue(error);
        }
    }
);

// //refreshToken
// //http://localhost:3000/tai_khoan/refreshToken
// export const apiRefreshToken = createAsyncThunk(
//     "tai_khoan/refreshToken",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await AxiosHelper()
//                 .post("/tai_khoan/refreshToken", data);
//             //console.log(response);
//             if (response.status == true) {
//                 return response;
//             }
//         } catch (error) {
//             console.log(error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );
