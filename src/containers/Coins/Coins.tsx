import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { fetchCoinsList } from "../../api/coins";
import CoinsTable from "../../components/CoinsTable";
import { resetState } from "../../store/reducers/coinSlice";
import { GET_COIN_LIMIT, GET_COIN_OFFSET } from "../../constans/values";

interface ICoinsProps { }

const Coins: React.FC<ICoinsProps> = () => {
    const [offset, setOffset] = useState<number>(GET_COIN_OFFSET);
    const dispatch = useAppDispatch();

    const { isLoading, list } = useAppSelector((state) => state.coins);

    useEffect(() => {
        if (!list.length) {
            dispatch(fetchCoinsList(offset));
        }

        return () => {
            dispatch(resetState());
        };
    }, []);

    const loadMoreCoinsClickHandler = () => {
        console.log("click");

        const nextOffsetValue = offset + GET_COIN_LIMIT;
        dispatch(fetchCoinsList(nextOffsetValue));
        setOffset(nextOffsetValue);
    }

    return (
        <div className="">
            {isLoading ? <div>Loading</div> :
                <div className="">
                    <CoinsTable coins={list} />
                    <button
                        onClick={loadMoreCoinsClickHandler}
                        className="mx-auto block px-6 capitalize py-4 my-5 text-center transition-colors rounded-full bg-bg-100 hover:bg-accent-200 hidden">
                        load more
                    </button>

                </div>
            }
        </div>
    );
};

export default Coins;
