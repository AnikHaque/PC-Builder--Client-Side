import { Button, message } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeAll } from "@/redux/features/pcBuilder/pcBuilderSlice";

export default function CompleteBuild() {
    const dispatch = useAppDispatch();
    const { processor, motherboard, ram, psu, sdCard, monitor } = useAppSelector((state) => state.pcBuilder);

    const handleComplete = () => {
        message.success("Build Successful");
        dispatch(removeAll());
    };

    return (
        <Button
            size="large"
            type="primary"
            shape="round"
            disabled={!processor || !motherboard || !ram || !psu || !sdCard || !monitor}
            onClick={handleComplete}
        >
            Complete Build
        </Button>
    );
}
