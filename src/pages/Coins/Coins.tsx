import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { fetchCoinsList } from "../../api/coins";
import CoinsTable from "../../components/CoinsTable";
import { resetCoinsState } from "../../store/reducers/coinSlice";
import { GET_COIN_LIMIT, GET_COIN_OFFSET } from "../../constans/values";
import CoinsTablePreloader from "../../components/Preloaders/CoinsTablePreloader";
import Button from "../../components/Button";

const Coins: React.FC = () => {
    const [offset, setOffset] = useState<number>(GET_COIN_OFFSET);
    const dispatch = useAppDispatch();

    const { list, isLoading } = useAppSelector((state) => state.coins);

    useEffect(() => {
        dispatch(fetchCoinsList(GET_COIN_OFFSET));

        return () => {
            dispatch(resetCoinsState());
        };
    }, []);

    const loadMoreCoinsClickHandler = () => {
        const nextOffsetValue = offset + GET_COIN_LIMIT;
        dispatch(fetchCoinsList(nextOffsetValue));
        setOffset(nextOffsetValue);
    };

    return (
        <div className="container">
            <CoinsTable coins={list} />
            {isLoading && <CoinsTablePreloader />}
            <div className="flex items-center justify-center my-4">
                <Button clickHandler={loadMoreCoinsClickHandler}>
                    load more
                </Button>
            </div>
        </div>
    );
};

export default Coins;
